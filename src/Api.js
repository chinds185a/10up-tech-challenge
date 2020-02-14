import axios from "axios";

export const fetchData = url => {
  const pagePromise = fetchPageData(url);
  return {
    pageData: wrapPromise(pagePromise)
  };
};

const wrapPromise = promise => {
  let status = "pending";

  let result;

  let suspender = promise.then(
    response => {
      status = "success";
      result = response;
    },
    error => {
      status = "error";
      result = error;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    }
  };
};

const fetchPageData = url => {
  return axios
    .get(url)
    .then(response => response.data)
    .catch(error => console.log(error));
};
