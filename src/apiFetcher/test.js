import {
  getAllRecipients,
  getRecipient,
} from "./recipients/getAllRecipients.js";
import { deleteRecipient } from "./recipients/deleteRecipient.js";
import { postRecipient } from "./recipients/postRecipient.js";

const data = {
  team: "team",
  name: "name",
  backgroundColor: "blue",
};

// const response = getAllRecipients().then((res) => {
//   console.log("전체조회...");
//   console.log(res.data);
//   console.log(res.status);
//   return res.data;
// });

// const responses = postRecipient(data).then((res) => {
//   console.log("등록...");
//   console.log(res.data);
//   return res.data;
// });

const responses2 = deleteRecipient(2717).then((res) => {
  console.log("삭제...");
  console.log(res.data);
  console.log(res.status);
  return res.data;
});
