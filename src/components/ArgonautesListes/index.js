import React, { useEffect, useState } from "react";
import database from "../../utils/database";
import { Card, Col, Row, Button } from "antd";

function ListesArgonautes() {
  const [argonautesListe, setArgonautesListe] = useState();

  const deleteArgo = () => {
    const argoDB = database.ref("argonautes");
    argoDB.remove();
  };
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
    <div style={{ height: "48vh", overflow: "hidden scroll", width: "100%" }}>
      <div>
        <div className="site-card-wrapper">
          <Row gutter={[16, 16]}>
            {argonautesListe &&
              argonautesListe.map((item, index) => (
                <Col span={8}>
                  <Card
                    hoverable
                    title={`Argonaute N°${index}`}
                    bordered={true}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>Nom: {item[0].argonaute}</p>
                      <Button
                        onClick={() => {
                          deleteArgo();
                        }}
                        type="primary"
                        shape="circle"
                        danger
                      >
                        X
                      </Button>
                    </div>
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
