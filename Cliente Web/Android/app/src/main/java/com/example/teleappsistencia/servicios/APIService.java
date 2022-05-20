package com.example.teleappsistencia.servicios;

import com.example.teleappsistencia.modelos.Alarma;
import com.example.teleappsistencia.modelos.CentroSanitarioEnAlarma;
import com.example.teleappsistencia.modelos.ClasificacionAlarma;
import com.example.teleappsistencia.modelos.PersonaContactoEnAlarma;
import com.example.teleappsistencia.modelos.RecursoComunitarioEnAlarma;
import com.example.teleappsistencia.modelos.TipoAlarma;
import com.example.teleappsistencia.modelos.Token;
import java.util.List;
import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.DELETE;
import retrofit2.http.Field;
import retrofit2.http.FormUrlEncoded;
import retrofit2.http.GET;
import retrofit2.http.Header;
import retrofit2.http.Headers;
import retrofit2.http.POST;
import retrofit2.http.PUT;
import retrofit2.http.Path;
import retrofit2.http.Query;

public interface APIService {

    // Peticiones del Token
    @Headers("Accept: application/json")
    @FormUrlEncoded
    @POST("api/token/")
    public Call<Token> getToken(@Field("username") String username, @Field("password") String password);

    //Peticiones de Alarma
    @GET("api-rest/alarma")
    public Call<List<Object>> getAlarmas(@Header("Authorization") String token);

    @GET("api-rest/alarma/{id}")
    public Call<Alarma> getAlarmabyId(@Path("id") int id, @Header("Authorization") String token);

    @GET("/api-rest/alarma?id_teleoperador__isnull=true")
    public Call<List<Object>> getAlarmasSinAsignar(@Header("Authorization") String token);

    @POST("api-rest/alarma")
    public Call<Alarma> addAlarma(@Body Alarma alarma, @Header("Authorization") String token);

    @PUT("api-rest/alarma/{id}")
    public Call<ResponseBody> actualizarAlarma(@Path("id") int id, @Header("Authorization") String token, @Body Alarma alarma);

    @DELETE("api-rest/alarma/{id}")
    public Call<ResponseBody> deleteAlarmabyId(@Path("id") int id, @Header("Authorization") String token);


    /* Peticiones Clasificacion Alarma */
    @GET("/api-rest/clasificacion_alarma")
    public Call<List<Object>> getListaClasificacionAlarma(@Header("Authorization") String token);

    @POST("api-rest/clasificacion_alarma")
    public Call<ClasificacionAlarma> addClasificacionAlarma(@Body ClasificacionAlarma clasificacionAlarma, @Header("Authorization") String token);

    @PUT("api-rest/clasificacion_alarma/{id}")
    public Call<ResponseBody> actualizarClasificacionAlarma(@Path("id") int id, @Header("Authorization") String token, @Body ClasificacionAlarma clasificacionAlarma);

    @DELETE("api-rest/clasificacion_alarma/{id}")
    public Call<ResponseBody> deleteClasificacionAlarmabyId(@Path("id") int id, @Header("Authorization") String token);


    /* Peticiones Tipo Alarma */
    @GET("/api-rest/tipo_alarma")
    public Call<List<Object>> getTiposAlarma(@Header("Authorization") String token);

    @POST("api-rest/tipo_alarma")
    public Call<TipoAlarma> addTipoAlarma(@Body TipoAlarma tipoAlarma, @Header("Authorization") String token);

    @PUT("api-rest/tipo_alarma/{id}")
    public Call<ResponseBody> actualizarTipoAlarma(@Path("id") int id, @Header("Authorization") String token, @Body TipoAlarma tipoAlarma);

    @DELETE("api-rest/tipo_alarma/{id}")
    public Call<ResponseBody> deleteTipoAlarmabyId(@Path("id") int id, @Header("Authorization") String token);


    /* Peticiones Centro_sanitario_en_alarma */
    @GET("/api-rest/centro_sanitario_en_alarma")
    public Call<List<Object>> getCentrosSanitariosEnAlarma(@Header("Authorization") String token);

    @POST("/api-rest/centro_sanitario_en_alarma")
    public Call<CentroSanitarioEnAlarma> addCentroSanitarioEnAlarma(@Body CentroSanitarioEnAlarma centroSanitarioEnAlarma, @Header("Authorization") String token);

    @PUT("/api-rest/centro_sanitario_en_alarma/{id}")
    public Call<ResponseBody> actualizarCentroSanitarioEnAlarma(@Path("id") int id, @Header("Authorization") String token, @Body CentroSanitarioEnAlarma centroSanitarioEnAlarma);

    @DELETE("/api-rest/centro_sanitario_en_alarma/{id}")
    public Call<ResponseBody> deleteCentroSanitarioEnAlarmabyId(@Path("id") int id, @Header("Authorization") String token);


    /* Peticiones Persona_contacto_en_alarma */
    @GET("/api-rest/persona_contacto_en_alarma")
    public Call<List<Object>> getPersonasContactoEnAlarma(@Header("Authorization") String token);

    @POST("/api-rest/persona_contacto_en_alarma")
    public Call<PersonaContactoEnAlarma> addPersonaContactoEnAlarma(@Body PersonaContactoEnAlarma personaContactoEnAlarma,  @Header("Authorization") String token);

    @PUT("/api-rest/persona_contacto_en_alarma/{id}")
    public Call<ResponseBody> actualizarPersonaContactoEnAlarma(@Path("id") int id, @Header("Authorization") String token, @Body PersonaContactoEnAlarma personaContactoEnAlarma);

    @DELETE("/api-rest/persona_contacto_en_alarma/{id}")
    public Call<ResponseBody> deletePersonaContactoEnAlarmabyId(@Path("id") int id, @Header("Authorization") String token);



    /* Peticiones Recurso_comunitario_en_alarma*/
    @GET("/api-rest/recursos_comunitarios_en_alarma")
    public Call<List<Object>> getRecursosComunitariosEnAlarma(@Header("Authorization") String token);

    @POST("/api-rest/recursos_comunitarios_en_alarma")
    public Call<RecursoComunitarioEnAlarma> addRecursoComunitarioEnAlarma(@Body RecursoComunitarioEnAlarma recursoComunitarioEnAlarma, @Header("Authorization") String token);

    @PUT("/api-rest/recursos_comunitarios_en_alarma/{id}")
    public Call<ResponseBody> actualizarRecursoComunitarioEnAlarma(@Path("id") int id, @Header("Authorization") String token, @Body RecursoComunitarioEnAlarma recursoComunitarioEnAlarma);

    @DELETE("/api-rest/recursos_comunitarios_en_alarma/{id}")
    public Call<ResponseBody> deleteRecursoComunitarioEnAlarmabyId(@Path("id") int id, @Header("Authorization") String token);



    /* Peticiones Terminal */
    @GET("/api-rest/terminal")
    public Call<List<Object>> getTerminales(@Header("Authorization") String token);

    /* Peticiones Paciente */
    @GET("/api-rest/paciente")
    public Call<List<Object>> getPacientes(@Header("Authorization") String token);


    // Peticiones Relacion Paciente - Persona
    @GET("/api-rest/relacion_paciente_persona")
    public Call<List<Object>> getContactosbyIdPaciente(@Query("id_paciente") int id, @Header("Authorization") String token);

    // Peticiones Relacion Usuario - Centro
    @GET("/api-rest/relacion_usuario_centro")
    public Call<List<Object>> getCentrosbyIdPaciente(@Query("id_paciente") int id, @Header("Authorization") String token);

    // Peticiones Relacion Terminal - Recurso Comunitario
    @GET("/api-rest/relacion_terminal_recurso_comunitario")
    public Call<List<Object>> getRecursosComunitariosbyIdTerminal(@Query("id_terminal") int id, @Header("Authorization") String token);



}
