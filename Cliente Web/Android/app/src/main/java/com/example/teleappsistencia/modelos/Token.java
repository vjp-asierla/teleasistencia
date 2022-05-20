package com.example.teleappsistencia.modelos;

import com.example.teleappsistencia.servicios.APIService;
import com.example.teleappsistencia.servicios.ClienteRetrofit;

import java.io.Serializable;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class Token implements Serializable {

    private String refresh;
    private String access;
    private static Token token;

    public String getRefresh() {
        return refresh;
    }

    public void setRefresh(String refresh) {
        this.refresh = refresh;
    }

    public String getAccess() {
        return access;
    }

    public void setAccess(String access) {
        this.access = access;
    }

    public static Token getToken(){
        return token;
    }

    public static void cargarToken(String user, String password){
        APIService apiService = ClienteRetrofit.getInstance().getAPIService();
        Call<Token> call = apiService.getToken(user, password);
        call.enqueue(new Callback<Token>() {
            @Override
            public void onResponse(Call<Token> call, Response<Token> response) {
                if(response.isSuccessful()){
                    token = response.body();
                    System.out.println("\nToken: " + token + "\n");

                } else{
                    System.out.println(response.message());
                    System.out.println(response.body());
                    System.out.println(response.raw());
                }
            }
            @Override
            public void onFailure(Call<Token> call, Throwable t) {
                t.printStackTrace();
                System.out.println(t.getMessage());
            }
        });
    }

    @Override
    public String toString() {
        return "Token{" +
                "refresh='" + refresh + '\'' +
                ", access='" + access + '\'' +
                '}';
    }
}
