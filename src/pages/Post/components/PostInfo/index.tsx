import {
  BackButton,
  PostInfoContainer,
  PostInfoFooter,
  PostInfoTitle,
} from "./styles";
import {
  faComment,
  faCalendarDay,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../../../../components/ExternalLink";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export function PostInfo() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <PostInfoContainer>
      <header>
        <BackButton onClick={goBack}>
          <FontAwesomeIcon icon={faChevronLeft} />
          Voltar
        </BackButton>

        <ExternalLink
          text="Ver no GitHub"
          icon={<FontAwesomeIcon icon={faUpRightFromSquare} />}
          href="#"
          target="_blank"
        />
      </header>

      <PostInfoTitle>JavaScript data types and data structures</PostInfoTitle>

      <PostInfoFooter>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            matheuslima99
          </li>

          <li>
            <FontAwesomeIcon icon={faCalendarDay} />
            Há 1 dia
          </li>

          <li>
            <FontAwesomeIcon icon={faComment} />5 comentários
          </li>
        </ul>
      </PostInfoFooter>
    </PostInfoContainer>
  );
}
