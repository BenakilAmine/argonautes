import React, { useEffect, useState } from "react";
import database from "../../utils/database";
import { Card, Col, Row, Button, Avatar } from "antd";
import { UserOutlined, TeamOutlined } from "@ant-design/icons";

function ListesArgonautes() {
  const [argonautesListe, setArgonautesListe] = useState();

  const deleteArgo = () => {
    const argoDB = database.ref("argonautes").child("-McxkmKuLUljEz8f2L1B");
    console.log("argoDB", argoDB);
    argoDB.remove();
  };

  useEffect(() => {
    const argoDB = database.ref("argonautes");
    argoDB.on("value", (snapshot) => {
      let previousList = snapshot.val();
      let liste = [];
      for (let key in previousList) {
        liste.push({ ...[previousList[key]] });
      }
      setArgonautesListe(liste);
    });
  }, []);

  console.log("argonautesListe", argonautesListe);
  return (
    <div
      style={{
        width: "100%",
        marginBottom: "10px",
      }}
    >
      <div>
        <h2>
          <Avatar>
            <TeamOutlined />
          </Avatar>{" "}
          Membres de l'équipage
        </h2>
        <div className="site-card-wrapper">
          <Row gutter={[16, 16]}>
            {argonautesListe &&
              argonautesListe.map(
                (item, index) => (
                  console.log("item", argonautesListe),
                  console.log("item", index),
                  (
                    <Col span={8}>
                      <Card
                        onClick={(e) => {
                          console.log("e", e.target.value);
                          deleteArgo();
                        }}
                        avatar={<UserOutlined />}
                        hoverable
                        title={
                          <>
                            <Avatar>
                              <UserOutlined />
                            </Avatar>
                            <span style={{ padding: 20 }}>
                              {item[0]?.argonaute}
                            </span>
                          </>
                        }
                        bordered={true}
                      >
                        <p>{`Argonaute N°${index}`}</p>
                      </Card>
                      <Button
                        onClick={(e) => {
                          console.log("e", e.target.value);
                          deleteArgo(e.target.value);
                        }}
                      >
                        Delete
                      </Button>
                    </Col>
                  )
                )
              )}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default ListesArgonautes;
