exports.hello = async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Hi Serverless :)! Your function executed successfully!'
      })
    };
  };