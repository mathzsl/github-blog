import { ExternalLink } from "../../../../components/ExternalLink";
import {
  ProfileContainer,
  ProfileDescription,
  ProfileDetails,
  ProfileInfo,
  ProfileName,
} from "./styles";

import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://github.com/matheuslima99.png" />

      <ProfileDetails>
        <header>
          <ProfileName>Matheus Soares</ProfileName>
          <ExternalLink
            text="Github"
            href="#"
            icon={<FontAwesomeIcon icon={faUpRightFromSquare} />}
          />
        </header>

        <ProfileDescription>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </ProfileDescription>

        <ProfileInfo>
          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              matheuslima99
            </li>

            <li>
              <FontAwesomeIcon icon={faBuilding} />
              Alagoa Grande
            </li>

            <li>
              <FontAwesomeIcon icon={faUserGroup} />
              14 seguidores
            </li>
          </ul>
        </ProfileInfo>
      </ProfileDetails>
    </ProfileContainer>
  );
}
