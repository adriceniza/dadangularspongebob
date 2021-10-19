package com.ceniza.spongebobclothes.entity.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="spongebobepisodes")
public class Episode implements Serializable {
private static final long serialVersionUID = 1L;

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
@Column(name="idspongebobepisodes")
long id;
@Column(name="episodename")
String name;
@Column(name="episodepreview")
String image;
@Column(name="episodevideo")
String video;



public Episode(String name,String image,String video) {
	super();
	this.name = name;
	this.image = image;
	this.video = video;		
}



public String getName() {
	return name;
}



public void setName(String name) {
	this.name = name;
}



public String getImage() {
	return image;
}



public void setImage(String image) {
	this.image = image;
}



public String getVideo() {
	return video;
}



public void setVideo(String video) {
	this.video = video;
}



public Episode() {}
}
	