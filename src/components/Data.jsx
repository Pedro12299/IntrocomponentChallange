import React, { useState } from "react";
import Input from "./Input";
import Errorimage from "./Errorimage";

function Data() {
  const [error, setError] = useState({
    errorFName: true,
    errorLName: true,
    errorEmail: true,
    errorPassword: true,
    globalError: true,
  });

  const [submission, setSubmission] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
  });

  function checkChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    setSubmission((prevSub) => {
      return {
        ...prevSub,
        [name]: value,
      };
    });
  }

  function manageError(prop) {
    setError({
      errorFName: prop.emptyFName,
      errorLName: prop.emptyLName,
      errorEmail: prop.emptyEmail,
      errorPassword: prop.emptyPassword,
      globalError: prop.emptyglobalError,
    });
  }

  function changeDone(event) {
    const empty = {
      emptyFName: true,
      emptyLName: true,
      emptyEmail: true,
      emptyPassword: true,
      globalError: false,
    };
    if (submission.fName === "") {
      empty.emptyFName = false;
      empty.globalError = true;
    }
    if (submission.lName === "") {
      empty.emptyLName = false;
      empty.globalError = true;
    }
    if (submission.email === "") {
      empty.emptyEmail = false;
      empty.globalError = true;
    }
    if (submission.password === "") {
      empty.emptyPassword = false;
      empty.globalError = true;
    }
    if (
      !empty.emptyFName ||
      !empty.emptyLName ||
      !empty.emptymail ||
      !empty.emptyassword
    ) {
      manageError(empty);
    }
    event.preventDefault();
  }

  return (
    <div class={error.globalError ? "formPart" : "formPartError"}>
      <form method="post">
        <div class="mb-3">
          <div class="form-group">
            <Input
              class={
                error.errorFName ? "thing topThing" : "topThing thing"
              }
              name="fName"
              type={"text"}
              placeholder={error.errorFName ? "First Name" : null}
              value={submission.fName}
              onChange={checkChange}
            />
            {error.errorFName ? null : (
              <p class="errorMessage">First Name cannot be empty</p>
            )}
            {error.errorFName ? null : (
              <Errorimage
                class={
                  error.errorFName ? "glyphicon glyphicon-remove cross" : "top"
                }
              />
            )}
          </div>
        </div>
        <div class="mb-3">
          <div class="form-group">
            <Input
              class={error.errorLName ? "thing" : "thing"}
              name="lName"
              type={"text"}
              placeholder={error.errorLName ? "Last Name" : null}
              value={submission.lName}
              onChange={checkChange}
            />
            {error.errorLName ? null : (
              <p class="errorMessage">Last Name cannot be empty</p>
            )}
            {error.errorLName ? null : <Errorimage top={"false"} />}
          </div>
        </div>
        <div class="mb-3">
          <div class="form-group">
            <Input
              class={error.errorEmail ? "thing" : "thing emailWrong "}
              name="email"
              type={"email"}
              placeholder={error.errorEmail ? "Email" : "email@example/com"}
              value={submission.email}
              onChange={checkChange}
            />
            {error.errorEmail ? null : (
              <p class="errorMessage">Looks like this is not an email</p>
            )}
            {error.errorEmail ? null : <Errorimage top={"false"} />}
          </div>
        </div>
        <div class="mb-3">
          <div class="form-group">
            <Input
              class={error.errorPassword ? "thing" : "thing"}
              name="password"
              type={"password"}
              placeholder={error.errorPassword ? "Password" : null}
              value={submission.password}
              onChange={checkChange}
            />
            {error.errorPassword ? null : (
              <p class="errorMessage">Password cannot be empty</p>
            )}
            {error.errorPassword ? null : <Errorimage top={"false"} />}
          </div>
        </div>
        <button class="button" type="submit" onClick={changeDone}>
          CLAIM YOUR FREE TRIAL
        </button>
      </form>
      <p class="formFootP">
        By clicking the button, you are agreeing to our{" "}
        <a class="anchor">Terms and Services</a>
      </p>
    </div>
  );
}

export default Data;
