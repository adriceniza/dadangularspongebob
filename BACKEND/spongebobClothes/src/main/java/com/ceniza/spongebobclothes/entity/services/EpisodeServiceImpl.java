package com.ceniza.spongebobclothes.entity.services;
import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ceniza.spongebobclothes.entity.dao.IEpisodeDao;
import com.ceniza.spongebobclothes.entity.models.Episode;

@Service
public class EpisodeServiceImpl  implements IEpisodeService{
	@Autowired
	IEpisodeDao episodedao;

	@Override
	public List<Episode> getAll() {
		return (List<Episode>) episodedao.findAll();
	}
}