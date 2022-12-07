package com.piramide;

import java.util.List;
import java.util.ArrayList;

public class Piramide {
    String piramideTexto;
    List<item> items = new ArrayList<>();


    public void transformar(){
        //using String split function
        String[] numeros = piramideTexto.split(" ");
        int nivel = 0;
        int contador = 0;
        int prox_nivel = 0; 

        for(String num : numeros) {

            item i = new item(Integer.parseInt(num), nivel, 0);
            items.add(i);
            contador++;
            if(contador >= prox_nivel){
                prox_nivel += 2;
                contador = 0;
                nivel += 1;
            }
        }
    }
    public void calcular(){


    }

    public void setPiramideTexto(String texto){
        this.piramideTexto = texto;
    }
}
