import { useCallback, useEffect, useState } from "react";
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
import { api } from "../../../../lib/axios";
import { Spinner } from "../../../../components/Spinner";

const userName = import.meta.env.VITE_GITHUB_USERNAME;

interface iUser {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  company?: string;
  bio: string;
  following: number;
}

export function Profile() {
  const [user, setUser] = useState({} as iUser);
  const [isLoading, setIsLoading] = useState(true);

  const getProfileData = useCallback(
    async function loadPosts() {
      try {
        const response = await api.get(`users/${userName}`);

        setUser(response.data);
      } finally {
        setIsLoading(false);
      }
    },
    [user]
  );

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <ProfileContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <img src={user.avatar_url} />

          <ProfileDetails>
            <header>
              <ProfileName>{user.name}</ProfileName>
              <ExternalLink
                text="Github"
                href={user.html_url}
                icon={<FontAwesomeIcon icon={faUpRightFromSquare} />}
                target="_blank"
              />
            </header>

            <ProfileDescription>{user.bio}</ProfileDescription>

            <ProfileInfo>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faGithub} />
                  {user.name}
                </li>

                <li>
                  <FontAwesomeIcon icon={faBuilding} />
                  {user.company ?? "--"}
                </li>

                <li>
                  <FontAwesomeIcon icon={faUserGroup} />
                  {user.following}
                </li>
              </ul>
            </ProfileInfo>
          </ProfileDetails>
        </>
      )}
    </ProfileContainer>
  );
}
