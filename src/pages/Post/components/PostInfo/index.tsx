import { PostInfoContainer, PostInfoFooter, PostInfoTitle } from "./styles";
import {
  faComment,
  faCalendarDay,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../../../../components/ExternalLink";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export function PostInfo() {
  return (
    <PostInfoContainer>
      <header>
        <ExternalLink
          variant="iconLeft"
          text="Voltar"
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
          href="#"
        />

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
