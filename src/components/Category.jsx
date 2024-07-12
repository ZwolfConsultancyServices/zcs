import React from "react";
import Card from "../card/card";
import "../componentsCss/Category.css";

const categories = {
  frontend: [
    { image: "/images/react.jpeg", name: "React JS" },
    { image: "/images/bootstrap.jpeg", name: "Bootstrap" },
    { image: "/images/angular.jpeg", name: "Angular" },
    { image: "/images/css.jpeg", name: "CSS 3" },
    { image: "/images/html.jpeg", name: "HTML 5" },
    { image: "/images/js.jpeg", name: "JavaScript" },
  ],
  backend: [
    { image: "/images/node.jpeg", name: "Node.js" },
    { image: "/images/express.jpeg", name: "Express" },
    { image: "/images/django.jpeg", name: "Django" },
    { image: "/images/laravel.jpeg", name: "Laravel" },
    { image: "/images/ruby.jpeg", name: "Ruby on Rails" },
  ],
  mobile: [
    { image: "/images/react.jpeg", name: "React Native" },
    { image: "/images/flutter.jpeg", name: "Flutter" },
    { image: "/images/swift.jpeg", name: "Swift" },
    { image: "/images/Android.jpeg", name: "Android" },
    { image: "/images/java.jpeg", name: "Java" },
    { image: "/images/ionic.jpeg", name: "Ionic" },
  ],
  cms: [{ image: "/images/cms.jpeg", name: "Content Management System" }],
  database: [
    { image: "/images/sql.jpeg", name: "MySQL" },
    { image: "/images/mariadb.jpeg", name: "MariaDB" },
    { image: "/images/MongoDB.jpeg", name: "MongoDB" },
    { image: "/images/mssql.jpeg", name: "MS SQL" },
    { image: "/images/firebase.jpeg", name: "Firebase" },
    { image: "/images/oracle.jpeg", name: "Oracle" },
  ],
};

const Category = ({ category }) => {
  const items = categories[category] || categories["frontend"]; // Default to frontend

  return (
    <div className="category">
      {items.map((item) => (
        <Card key={item.name} name={item.name} image={item.image} />
      ))}
    </div>
  );
};

export default Category;
