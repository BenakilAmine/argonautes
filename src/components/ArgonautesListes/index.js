import React, { useEffect, useState } from "react";
import database from "../../utils/database";
import { Card, Col, Row } from "antd";

function ListesArgonautes() {
  const [argonautesListe, setArgonautesListe] = useState();

  useEffect(() => {
    const argoDB = database.ref("argonautes");
    argoDB.on("value", (snapshot) => {
      let previousList = snapshot.val();
      console.log("previousList", previousList?.argonaute);
      let liste = [];
      for (let key in previousList) {
        console.log("key", ...[previousList[key]]);
        liste.push({ ...[previousList[key]] });
      }
      console.log("data", liste);
      // console.log("liste", liste);
      // if (!previousList) return;
      setArgonautesListe(liste);
    });
  }, []);
  console.log("argonautesListe", argonautesListe);
  return (
    <div style={{ backgroundColor: "orange" }}>
      <div>
        <div className="site-card-wrapper">
          <Row gutter={[16, 16]}>
            {argonautesListe &&
              argonautesListe.map((item, index) => (
                <Col span={8}>
                  <Card title={`Argonaute number ${index}`} bordered={false}>
                    <p>{item[0].argonaute}</p>
                  </Card>
                </Col>
                // return <p>{item[0].argonaute}</p>;
              ))}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default ListesArgonautes;
