package com.ceniza.spongebobclothes.entity.dao;
import org.springframework.data.repository.CrudRepository;
import com.ceniza.spongebobclothes.entity.models.Episode;

public interface IEpisodeDao extends CrudRepository<Episode, Long>{

}