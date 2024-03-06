import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Pagination({ numOfPages, currentPage , route }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (numOfPages == undefined) return;
    if (currentPage > numOfPages) navigate(route+ numOfPages);
    else if (currentPage < 1) navigate(route+ 1);
  }, [currentPage, navigate, numOfPages]);
  const generatePages = [];
  for (let i = 1; i <= numOfPages; i++) {
    generatePages.push(
      <Link to={"/shop/" + i}>
        <Button
          variant={currentPage == i ? "primary" : "outline-primary"}
          key={`pagination${i}`}
        >
          {i}
        </Button>
      </Link>
    );
  }
  return (
    <div className="d-flex justify-content-center gap-3">{generatePages}</div>
  );
}
