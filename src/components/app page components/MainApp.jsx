import Form from "./Form";
import DataAndEditing from "./DataAndEditing";
import { useEffect } from "react";
import ReactGA from 'react-ga';


function MainApp() {
  useEffect(()=>{
    ReactGA.pageview(window.location.pathname);
  },[])
  return (
    <>
      <Form />
      <DataAndEditing/>
    </>
  );
}

export default MainApp;
