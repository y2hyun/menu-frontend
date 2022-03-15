import {useEffect, useState} from "react";
import axios from "axios";

const App = () => {
  const [message, setMessage] = useState('...')
  useEffect(() => {
    const getHello = async (setter) => {
      try {
        const {data} = await axios.get("/hello")
        setter(data.message)
      } catch (err) {
        setter("error!")
      }
    }
    getHello(setMessage).then(() => {})
  }, [])
  return (
      <div>{message}</div>
  );
}

export default App;
