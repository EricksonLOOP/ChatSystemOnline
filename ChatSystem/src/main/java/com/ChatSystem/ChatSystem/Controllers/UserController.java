package com.ChatSystem.ChatSystem.Controllers;

import com.ChatSystem.ChatSystem.Entitys.User;
import com.ChatSystem.ChatSystem.Repositories.UserRepository;
import org.apache.tomcat.util.json.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(originPatterns = "http://localhost:5173/")
public class UserController {
    @Autowired
    private UserRepository repository;
    @PostMapping("/user/create")
    public ResponseEntity<Object> createUser(@RequestBody User user){
        try{
            Optional<User> findUser = repository.findByName(user.getName());
            if (findUser.isPresent()){
                return ResponseEntity.status(HttpStatus.CONFLICT).body("Username already exist.");
            }
            return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(user));


        }catch (Exception ex){
            return ResponseEntity.status(HttpStatusCode.valueOf(500)).body("Internal server error: "+ex.getMessage());
        }

    }
    @PostMapping("/user/login")
    public ResponseEntity<Object> loginUser(@RequestBody User user){
        try{
            Optional<User> findUser = repository.findByName(user.getName());
            if (findUser.isPresent()){
                User userInfo = findUser.get();
                if (userInfo.getPassword().equals(user.getPassword())){
                    return ResponseEntity.status(HttpStatus.OK).body(userInfo);
                }
                return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("Wrong user password.");
            }
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not foud.");

        }catch (Exception ex){
            return  ResponseEntity.status(HttpStatusCode.valueOf(500)).body("Internal server error: "+ex.getMessage());
        }
    }
    @GetMapping("user/getusers")
    public ResponseEntity<Object> getUsers(){
        try {
            List<User> users = repository.findAll();
            List<String[]> data = new ArrayList<>();
            if (!users.isEmpty()){
                for(int i = 0; i < users.size(); i++ ){
                    String[] userData = {users.get(i).getName(), String.valueOf(users.get(i).getId())};
                    data.add(userData);
                }

                return ResponseEntity.status(HttpStatus.OK).body(data);
            }
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No users have been found");
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

}
