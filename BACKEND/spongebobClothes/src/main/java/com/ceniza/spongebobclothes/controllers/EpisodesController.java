package com.ceniza.spongebobclothes.controllers;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ceniza.spongebobclothes.entity.services.IEpisodeService;

import java.util.Optional;
import com.ceniza.spongebobclothes.entity.models.Episode;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class EpisodesController {
	@Autowired
	IEpisodeService episodeservice;
	
	
	@GetMapping("/SpongebobEpisode")
	List<Episode> getAll(){
		return episodeservice.getAll();
	}

}