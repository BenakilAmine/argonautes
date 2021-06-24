import React, { useState, useContext } from "react";
import database from "../../utils/database";
// import { UidContext } from "./UidContext";

const UpdateDelete = ({ item }) => {
  const [update, setUpdate] = useState(false);
  const [argoUpdate, setArgoUpdate] = useState(null);

  //   const uid = useContext(UidContext);

  //   const authorCheck = () => {
  //     if (item.uid === uid) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   };
  //   authorCheck();
  console.log("item", item);
  const updateItem = () => {
    // pointer id de l'élement à update
    let argoDB = database.ref("argonautes");
    argoDB.on("value", (snapshot) => {
      let previousList = snapshot.val();
      console.log("previousList", previousList?.argonaute);
      let liste = [];
      for (let key in previousList) {
        console.log("key", ...[previousList[key]]);
        liste.push({ ...[previousList[key]] });
      }
    });
    // make sure there's no undifined
    if (argoUpdate !== null) {
      argoDB.update({
        argonautes: argoUpdate,
      });
    }
    // if (textUpdate !== null) {
    //   quote.update({
    //     text: textUpdate,
    //   });
    // }
    // repasse update sur false
    setUpdate(false);
  };

  const deleteItem = () => {
    // pointer id de l'élement à delete
    let argoDB = database.ref("argonautes");

    // argoDB.remove();
    // authorCheck();
  };

  return (
    <li>
      {update === false && (
        <div className="item-container">
          <h2>{item[0].argonaute}</h2>

          <div className="buttons-container">
            <button onClick={() => setUpdate(!update)}>Update</button>
            <button onClick={deleteItem}>Delete</button>
          </div>
        </div>
      )}

      {update && (
        <div className="item-container-update">
          <input
            type="text"
            defaultValue={item.argonaute}
            onChange={(e) => setArgoUpdate(e.target.value)}
          />
          <button onClick={updateItem}>Validate update</button>
        </div>
      )}
    </li>
  );
};

export default UpdateDelete;
