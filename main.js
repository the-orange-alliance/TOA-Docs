import "./style.css";
import SwaggerUI from "swagger-ui";
import "swagger-ui/dist/swagger-ui.css";

const path = location.pathname;

SwaggerUI({
    dom_id: "#app",
    url: `${pathname}openapi.yml`,
});
