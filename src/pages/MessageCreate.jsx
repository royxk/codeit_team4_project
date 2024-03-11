import { useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from '../components/core/NavBar.jsx';
import styled from 'styled-components';
import { media } from '../styles/utils/mediaQuery.ts';
import { FONT_LIST, IMAGE_TYPES, RELATION_LIST } from '../common/types.js';
import userIcon from '../assets/images/userIcon.svg';
import ReactQuill from 'react-quill';
import { DEFAULT_QUILL_STYLE, QUILL_MODULES } from '../common/quill.js';
import { uploadImage } from '../apiFetcher/s3/uploadImage.js';
import { v4 as uuidv4 } from 'uuid';
import { postRecipientMessage } from '../apiFetcher/recipients/postRecipientMessage.js';
import Input from '../components/Input/Input.jsx';
import { isValidName } from '../common/validation/validateName.js';
import useOutSideClick from '../hooks/useOutSideClick.js';
import theme from '../styles/theme.js';
import DropDown from '../components/core/DropDown.jsx';

const MessageCreate = () => {
  const { id } = useParams();
  const eventRef = useRef();
  const relationValue = useRef(RELATION_LIST[0]);
  const fontValue = useRef(FONT_LIST[0]);

  const [profile, setProfile] = useState({
    file: null,
    fileSrc: "https://rolling-bucket.s3.ap-northeast-2.amazonaws.com/assets/userIcon.svg",
  });
  const [sender, setSender] = useState('');
  const formData = useRef({
    sender: '',
    profileImageURL: '',
    relationship: RELATION_LIST[0],
    content: '',
    font: FONT_LIST[0],
  });

  const [isLoading, setIsLoading] = useState(false);
  const extension = useRef('');
  const navigate = useNavigate();

  const imageUpload = (e) => {
    const MAX_SIZE = 500 * 1024;

    const file = e.target.files[0];
    const ext = file.name.split('.').pop();

    if (!IMAGE_TYPES.includes(ext)) {
      alert('JPG(JPEG), PNG 파일만 업로드 가능합니다.');
      return;
    }
    if (file.size > MAX_SIZE) {
      alert('업로드 가능한 파일 크기는 최대 500KB 입니다.');
      return;
    }

    extension.current = ext;
    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise((resolve) => {
      reader.onload = () => {
        console.log(reader);
        setProfile({
          file: file,
          fileSrc: reader.result,
        });
        resolve();
      };
    });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    formData.current[id] = value;
  };

  const handleDropDownClick = (id, value = '') => {
    formData.current[id.current] = value;
  };

  const handleQuillChange = (content) => {
    formData.current['content'] = content;
  };

  const submitFormData = (e) => {
    e.preventDefault();

    if (formData.current['sender'] === '' || formData.current['sender'] < 2) {
      alert('이름은 두 글자 이상으로 작성해 주세요.');
      return;
    }
    if (profile.file === null) {
      alert('이미지를 등록해주세요.');
      return;
    }
    if (formData.current['content'] === '') {
      alert('보낼 메시지를 입력해 주세요.');
      return;
    }

    const handleUpload = async () => {
      try {
        setIsLoading(true);

        const s3FormData = new FormData();
        s3FormData.append('imageFile', profile.file);
        s3FormData.append('imageName', uuidv4().replaceAll('-', '') + '.' + extension.current);

        formData.current['profileImageURL'] = await uploadImage(s3FormData);
        postRecipientMessage(formData.current, id).then(() => {
          navigate(`/post/${id}`);
        });
      } catch (error) {
        console.error('이미지 업로드를 실패하였습니다.');
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    handleUpload();
  };

  useOutSideClick(eventRef, () => {
    setSender(formData.current.sender);
  });

  return (
    <>
      <S.EntireWrapper>
        <S.NavWrapper>
          <NavBar buttonVisible={false} paddingInline="24px" />
        </S.NavWrapper>
        <S.FormWrapper>
          <S.Form id="message" onSubmit={(e) => submitFormData(e)}>
            <S.InputContentWrapper>
              <S.Label htmlFor="sender">From.</S.Label>
              <Input
                id="sender"
                placeholder="이름을 입력해 주세요."
                onChange={(e) => handleChange(e)}
                maxLength="10"
                error={isValidName(sender, 2, 10)}
                errorMessage="2~5글자의 한글 또는 2~10글자의 영어로 작성해주세요."
                reference={eventRef}
              />
            </S.InputContentWrapper>
            <S.InputContentWrapper>
              <S.Label htmlFor="profileImageURL">프로필 이미지</S.Label>
              <S.ImageInputLabel htmlFor="profileImageURL" $image={profile.fileSrc} />
              <S.ImageInput id="profileImageURL" type="file" onChange={(e) => imageUpload(e)} />
            </S.InputContentWrapper>
            <S.InputContentWrapper>
              <S.Label htmlFor="relationship">상대와의 관계</S.Label>
              <DropDown item={RELATION_LIST} value={relationValue.current} id={'relationship'} event={(id, value) => handleDropDownClick(id, value)}>
                {relationValue.current}
              </DropDown>
            </S.InputContentWrapper>
            <S.InputContentWrapper>
              <S.Label>내용을 입력해 주세요</S.Label>
              <S.QuillEditorContainer>
                <ReactQuill style={DEFAULT_QUILL_STYLE} modules={QUILL_MODULES} onChange={handleQuillChange} />
              </S.QuillEditorContainer>
            </S.InputContentWrapper>
            <S.InputContentWrapper>
              <S.Label htmlFor="font">폰트 선택</S.Label>
              <DropDown item={FONT_LIST} $value={fontValue.current} id={'font'} event={(id, value) => handleDropDownClick(id, value)}>
                {fontValue.current}
              </DropDown>
            </S.InputContentWrapper>
          </S.Form>
        </S.FormWrapper>
        <S.CreateButton form="message" type="submit" disabled={isLoading}>
          생성하기
        </S.CreateButton>
      </S.EntireWrapper>
    </>
  );
};

export default MessageCreate;

const S = {
  EntireWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;

    background-color: ${({ theme }) => theme.colors.white};
  `,

  NavWrapper: styled.div`
    display: none;

    ${media.tablet`
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 64px;
      `};

    ${media.desktop`
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 64px;
        `};
  `,

  FormWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    left: 600px;
  `,
  Form: styled.form`
    display: flex;
    flex-direction: column;
    min-width: 320px;
    margin-top: 50px;
    height: fit-content;
    gap: 50px;

    background-color: ${({ theme }) => theme.colors.white};

    ${media.tablet`
            margin-top: 0;
            min-width: 720px;
      `};
  `,

  TextInput: styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 720px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.grey['300']};
    padding: 12px 16px;

    line-height: 26px;
    font-family: ${({ theme }) => theme.fontFamily.base};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.grey['500']};
  `,

  Label: styled.label`
    font-family: ${({ theme }) => theme.fontFamily.base};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    color: ${({ theme }) => theme.colors.grey['900']};
  `,

  InputContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 12px;
  `,

  SelectInput: styled.div`
    width: 320px;
    min-height: 50px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.grey['300']};
    padding: 12px 16px;
  `,

  ImageInputLabel: styled.label`
    width: 100px;
    height: 100px;
    border-radius: 100px;
    padding: 24px;
    background-color: ${(props) => (props.$image === "https://rolling-bucket.s3.ap-northeast-2.amazonaws.com/assets/userIcon.svg" ? theme.colors.grey['300'] : theme.colors.white)};
    background-image: url(${(props) => props.$image});
    background-size: ${(props) => (props.$image === "https://rolling-bucket.s3.ap-northeast-2.amazonaws.com/assets/userIcon.svg" ? 'initial' : 'cover')};
    background-repeat: no-repeat;
    background-position: center;
  `,

  ImageInput: styled.input`
    display: none;
  `,

  CreateButton: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 14px 24px;
    width: 720px;
    height: 56px;
    margin-bottom: 50px;
    border-radius: 12px;
    border: 1px solid ${({ theme }) => theme.colors.grey['300']};
    background-color: #9935ff;

    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.white};
    line-height: 28px;
  `,

  QuillEditorContainer: styled.div`
    width: 100%;
    height: fit-content;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.grey['300']};
    overflow: hidden;
  `,
};
