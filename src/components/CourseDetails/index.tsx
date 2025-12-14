import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "../../components/Header/Header";
import "./Styles.css";
import TeacherCard from "../../components/TeacherCard";

export default function CourseDetails() {
  const { courseId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("ID do curso:", courseId);

    if (!courseId) {
      navigate("/courses");
    }
  }, [courseId, navigate]);

  return (
    <>
      <Header />
      <div id="course-details">
        <h1 id="course-title">Nome do curso - {courseId}</h1>
        <p id="course-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <h2>Professores</h2>
        <TeacherCard />

        <p id="drive-link">
          <a href="https://drive.google.com/drive/u/2/folders/1IvAUkWQYgEleqIVDX0HVwz5nftYLAy6O" target="_blank">
            Acesse as provas e atividades
          </a>
        </p>
      </div>
    </>
  );
}
