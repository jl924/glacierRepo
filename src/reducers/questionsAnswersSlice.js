import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  questionsAnswers: [
    {
        "question_id": 644533,
        "question_body": "Here is a question, what time is it?",
        "question_date": "2022-12-15T00:00:00.000Z",
        "asker_name": "Edgar",
        "question_helpfulness": 82,
        "reported": false,
        "answers": {
            "5990526": {
                "id": 5990526,
                "body": "I am the knight time.",
                "date": "2023-02-06T00:00:00.000Z",
                "answerer_name": "Batman",
                "helpfulness": 26,
                "photos": [
                    "https://lumiere-a.akamaihd.net/v1/images/102_gza1510_comp_v002_c5fae827.jpeg?region=0%2C0%2C3840%2C2160"
                ]
            },
            "5990717": {
                "id": 5990717,
                "body": "Listen to me when i answer your question",
                "date": "2023-02-10T00:00:00.000Z",
                "answerer_name": "Listener",
                "helpfulness": 17,
                "photos": [
                    "https://lumiere-a.akamaihd.net/v1/images/102_gza1510_comp_v002_c5fae827.jpeg?region=0%2C0%2C3840%2C2160"
                ]
            },
            "5990796": {
                "id": 5990796,
                "body": "Ask a guardian what the time is",
                "date": "2023-02-11T00:00:00.000Z",
                "answerer_name": "a guardian",
                "helpfulness": 4,
                "photos": [
                    "https://www.cnet.com/a/img/resize/b7707b8ad323bc77e6c9baca0e0950097fdb40f0/hub/2020/11/05/27b4a2c6-e262-4136-8edc-ceb2715371a2/guardians1.jpg?auto=webp&fit=crop&height=675&width=1200"
                ]
            },
            "5990799": {
                "id": 5990799,
                "body": "Ask groot.. he has a watch now",
                "date": "2023-02-11T00:00:00.000Z",
                "answerer_name": "grootlover",
                "helpfulness": 0,
                "photos": [
                    "https://timeandtidewatches.com/wp-content/uploads/2017/04/GOTG2-baby-groot.jpg"
                ]
            }
        }
    },
    {
      "question_id": 644533,
      "question_body": "Would this look good in the Batcave?",
      "question_date": "2022-12-15T00:00:00.000Z",
      "asker_name": "Batman",
      "question_helpfulness": 82,
      "reported": false,
      "answers": {
          "5990526": {
              "id": 5990526,
              "body": "No, better in Metropolis",
              "date": "2023-02-06T00:00:00.000Z",
              "answerer_name": "Superman",
              "helpfulness": 26,
              "photos": [
                  "https://lumiere-a.akamaihd.net/v1/images/102_gza1510_comp_v002_c5fae827.jpeg?region=0%2C0%2C3840%2C2160"
              ]
          },
          "5990717": {
              "id": 5990717,
              "body": "inserting answer for testing purposes thank you ",
              "date": "2023-02-10T00:00:00.000Z",
              "answerer_name": "NickName",
              "helpfulness": 17,
              "photos": [
                  "https://lumiere-a.akamaihd.net/v1/images/102_gza1510_comp_v002_c5fae827.jpeg?region=0%2C0%2C3840%2C2160"
              ]
          },
          "5990796": {
              "id": 5990796,
              "body": "hahahahaha",
              "date": "2023-02-11T00:00:00.000Z",
              "answerer_name": "Tree",
              "helpfulness": 4,
              "photos": [
                  "https://www.cnet.com/a/img/resize/b7707b8ad323bc77e6c9baca0e0950097fdb40f0/hub/2020/11/05/27b4a2c6-e262-4136-8edc-ceb2715371a2/guardians1.jpg?auto=webp&fit=crop&height=675&width=1200"
              ]
          },
          "5990799": {
              "id": 5990799,
              "body": "No.",
              "date": "2023-02-11T00:00:00.000Z",
              "answerer_name": "NoMan",
              "helpfulness": 0,
              "photos": [
                  "https://timeandtidewatches.com/wp-content/uploads/2017/04/GOTG2-baby-groot.jpg"
              ]
          }
      }
    },
    {
      "question_id": 644533,
      "question_body": "Can we get this for free please?",
      "question_date": "2022-12-15T00:00:00.000Z",
      "asker_name": "NoMoney",
      "question_helpfulness": 82,
      "reported": false,
      "answers": {
          "5990526": {
              "id": 5990526,
              "body": "Sure, why not?",
              "date": "2023-02-06T00:00:00.000Z",
              "answerer_name": "yesyesyesyes",
              "helpfulness": 26,
              "photos": [
                  "https://lumiere-a.akamaihd.net/v1/images/102_gza1510_comp_v002_c5fae827.jpeg?region=0%2C0%2C3840%2C2160"
              ]
          },
          "5990717": {
              "id": 5990717,
              "body": "inserting answer for testing purposes thank you ",
              "date": "2023-02-10T00:00:00.000Z",
              "answerer_name": "NickName",
              "helpfulness": 17,
              "photos": [
                  "https://lumiere-a.akamaihd.net/v1/images/102_gza1510_comp_v002_c5fae827.jpeg?region=0%2C0%2C3840%2C2160"
              ]
          },
          "5990796": {
              "id": 5990796,
              "body": "Ask a guardian what the time is",
              "date": "2023-02-11T00:00:00.000Z",
              "answerer_name": "a guardian",
              "helpfulness": 4,
              "photos": [
                  "https://www.cnet.com/a/img/resize/b7707b8ad323bc77e6c9baca0e0950097fdb40f0/hub/2020/11/05/27b4a2c6-e262-4136-8edc-ceb2715371a2/guardians1.jpg?auto=webp&fit=crop&height=675&width=1200"
              ]
          },
          "5990799": {
              "id": 5990799,
              "body": "Ask groot.. he has a watch now",
              "date": "2023-02-11T00:00:00.000Z",
              "answerer_name": "grootlover",
              "helpfulness": 0,
              "photos": [
                  "https://timeandtidewatches.com/wp-content/uploads/2017/04/GOTG2-baby-groot.jpg"
              ]
          }
      }
    }
  ]
};

const questionsAnswersSlice = createSlice({
  name: 'questionsAnswers',
  initialState,
  reducers: {
    questionsAnswersRequest(state) {
      state.isLoading = true;
    },
    questionsAnswersRequestSuccess(state, action) {
      state.questionsAnswers = action.payload //.questionsAnswers;
      state.isLoading = false;
    }
  }
});

export default questionsAnswersSlice;