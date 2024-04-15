import React from "react";
import {
  createSearchParams,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import ReadComponent from "../../components/todo/ReadComponent";

function ReadPage(props) {
  const navigate = useNavigate();
  const { tno } = useParams();

  const [queryParams] = useSearchParams();

  const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1;
  const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10;

  const queryStr = createSearchParams({ page: page, size: size }).toString();
  // createSearchParams 를 사용 하면 ? 뒤의 쿼리 스트링을 만들어준다.

  console.log("tno: " + tno);

  const moveToModify = (tno) => {
    navigate({ pathname: `/todo/modify/${tno}`, search: queryStr });
  };

  const moveToList = () => {
    navigate({ pathname: `/todo/list/`, search: queryStr });
  };

  return (
    <div className={"font-extrabold w-full bg-white mt-6"}>
      <div className={"text-2xl"}>Todo Read Page Component {tno}</div>

      <ReadComponent tno={tno} />
    </div>
  );
}

export default ReadPage;
