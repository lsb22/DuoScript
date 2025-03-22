import { useEffect, useRef } from "react";
import { Box, Stack, Text } from "@chakra-ui/react";
import challenge from "../assets/images/challenge.png";
import truck from "../assets/images/delivery-truck.png";
import quality from "../assets/images/high-quality.png";
import brothers from "../assets/images/brothers_img4.jpg";

interface Props {
  aboutRef: (ref: React.RefObject<HTMLDivElement>) => void;
}

const AboutSection = ({ aboutRef }: Props) => {
  const about_ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (about_ref.current) aboutRef(about_ref);
  }, []);

  return (
    <div className="abt-grid">
      <Box ref={about_ref}></Box>
      <div className="about-container">
        <div className="about-div1">
          <img className="abt-img" src={brothers} />
        </div>
        <div className="about-div2">
          <Stack>
            <Box>
              <Text className="abt-div2-desc-h1">About Us</Text>
            </Box>
            <Box>
              <Text className="abt-div2-desc-h2">
                What exactly does Duoscript do ?
              </Text>
            </Box>
            <Box>
              <Text className="abt-div2-desc-h3">
                Duoscript works on writing a content which can capitalize by
                converting a piece of copy into Sales. Expertised in writing
                Email copys to promote a brand's product which makes their
                customers to take actions towards it.
              </Text>
            </Box>
          </Stack>
        </div>
        <div className="about-div3">
          <Stack>
            <Box>
              <Text className="abt-div3-desc-h1">
                Why should you work with Duoscript?
              </Text>
            </Box>
            <Box>
              <ul className="abt-div3-desc-ul">
                <li>
                  Duoscript is Trust worthy by keeping a{" "}
                  <span
                    style={{
                      color: "gold",
                      fontStyle: "italic",
                      fontWeight: "bold",
                    }}
                  >
                    good relationship
                  </span>{" "}
                  with their partners.
                </li>
                <li>
                  There are currently{" "}
                  <span
                    style={{
                      color: "gold",
                      fontStyle: "italic",
                      fontWeight: "bold",
                    }}
                  >
                    2 partners
                  </span>{" "}
                  who have kept their Trust on Duoscript
                </li>
                <li>
                  What more would you need to{" "}
                  <span
                    style={{
                      color: "gold",
                      fontStyle: "italic",
                      fontWeight: "bold",
                    }}
                  >
                    Trust
                  </span>{" "}
                  ???
                </li>
              </ul>
            </Box>
          </Stack>
        </div>
      </div>
      <div className="about-container2">
        <div className="about-div4">
          <Stack justifyContent="center" alignItems="center" height="100%">
            <img src={truck} />
            <Text className="abt-div4-h1">
              Timely Delivery of your Email copys.
            </Text>
          </Stack>
        </div>
        <div className="about-div5">
          <Stack justifyContent="center" alignItems="center" height="100%">
            <img src={quality} />
            <Text className="abt-div5-h1">Quality in writing your copys.</Text>
          </Stack>
        </div>
        <div className="about-div6">
          <Stack justifyContent="center" alignItems="center" height="100%">
            <img src={challenge} />
            <Text className="abt-div6-h1">
              Reaching expectations through copys.
            </Text>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
