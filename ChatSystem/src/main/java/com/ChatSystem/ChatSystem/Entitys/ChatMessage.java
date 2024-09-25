package com.ChatSystem.ChatSystem.Entitys;

import jakarta.persistence.Entity;
import lombok.Data;

import java.awt.*;

@Data
public class ChatMessage {
    private String content;
    private String sender;
    private TrayIcon.MessageType type;
    public enum MessageType{
        CHAT, JOIN, LEAVE
    }
}
