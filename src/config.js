const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-api-dev-attachmentsbucket-1sleykps87ozo"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://txlr5digzh.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_mZrqu9aG0",
    APP_CLIENT_ID: "5h5ftjf1ulodoqvr60hr7ga5th",
    IDENTITY_POOL_ID: "us-east-1:80422d3b-7294-4bad-90d4-aa17632dfe32"
  },
  STRIPE_KEY: "pk_test_ZUbhnJPiWlre3i0rn83Lp5il00jAWIH5Pv",
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-api-prod-attachmentsbucket-1rwn19gm82v94"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://37wbbdkwof.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_z0wSsVDHL",
    APP_CLIENT_ID: "3g4i5n19qe7i9dn4qdcfm9mmju",
    IDENTITY_POOL_ID: "us-east-1:8adaaa23-002e-4bd1-98be-10997eed7c9c"
  },
  STRIPE_KEY: "pk_test_ZUbhnJPiWlre3i0rn83Lp5il00jAWIH5Pv",
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
