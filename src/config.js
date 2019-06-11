export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "wiaderkonanotatki"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://05zd64onr0.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_fS9nznahZ",
    APP_CLIENT_ID: "5ibn7aio9gudt17jloe4s2dikv",
    IDENTITY_POOL_ID: "us-east-1:a8ee397c-bdbf-491f-af8d-6594f08b27a1"
  }
};
