package com.piramide;

import static spark.Spark.*;
import org.json.JSONObject;

import com.google.gson.Gson;


import java.util.LinkedList;
import java.util.List;


public class App
{
    public static void main( String[] args )
    {
        List<Piramide> listaPiramide = new LinkedList<>();
        Gson gson = new Gson();

        options("/*", (request, response) -> {
            String accessControlRequestHeaders = request
                    .headers("Access-Control-Request-Headers");
            if (accessControlRequestHeaders != null) {
                response.header("Access-Control-Allow-Headers",
                        accessControlRequestHeaders);
            }

            String accessControlRequestMethod = request
                    .headers("Access-Control-Request-Method");
            if (accessControlRequestMethod != null) {
                response.header("Access-Control-Allow-Methods",
                        accessControlRequestMethod);
            }

            return "OK";
        });

        before((request, response) -> response.header("Access-Control-Allow-Origin", "*"));

        get("/xopa", (req, res) -> {
            return "Xopa mundo";
        });

        get("/pyramid/:id", (req, res) -> {
            res.type("application/json");
            JSONObject jsonobj = new JSONObject(listaPiramide.get(Integer.parseInt(req.params(":id")) ));
            return jsonobj;
        });

        post("/pyramid", (req, res) -> {
            res.type("application/json");
            Piramide pira = new Piramide();
            JSONObject body = new JSONObject(req.body());
            pira.setPiramideTexto(body.getString("piramideTexto"));
            pira.transformar();
            listaPiramide.add(pira);
            String jsonobj = gson.toJson(pira);
            System.out.print(jsonobj);
            System.out.print(pira);
            return jsonobj;
        });

        get("/pyramid", (req, res) -> {
            res.type("application/json");
            String jsonobj = gson.toJson(listaPiramide);
            System.out.println(jsonobj);
            return jsonobj;
        });
        
    }
}
