import { Link, useLocation, useParams } from "react-router-dom";


const data = [
  { id: 1, todo: '리액트 배우기' },
  { id: 2, todo: '노드 배우기' },
  { id: 3, todo: '자바스크립트 배우기' },
  { id: 4, todo: '파이어 베이스 배우기' },
  { id: 5, todo: '넥스트 배우기' },
  { id: 6, todo: 'HTTP 프로토콜 배우기' },
];


const Work = () => {
  const location = useLocation();
  const param = useParams();
  const work = data.find((work) => work.id === parseInt(param.id));
  console.log("location :>> ", location);
  return (
    <div>
      <div>{`현재 페이지 : ${location.pathname.slice(1)} & ${work.todo}`}</div>
      <Link to="/contact">contact 이동</Link>
    </div>
  );
};

export default Work;