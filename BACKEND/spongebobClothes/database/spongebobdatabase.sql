-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: spongebobdb
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `spongebobbasket`
--

DROP TABLE IF EXISTS `spongebobbasket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `spongebobbasket` (
  `id` int NOT NULL AUTO_INCREMENT,
  `model` varchar(45) NOT NULL,
  `prize` int NOT NULL,
  `size` varchar(30) NOT NULL,
  `img` varchar(60) NOT NULL,
  `units` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=95 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `spongebobbasket`
--

LOCK TABLES `spongebobbasket` WRITE;
/*!40000 ALTER TABLE `spongebobbasket` DISABLE KEYS */;
/*!40000 ALTER TABLE `spongebobbasket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `spongebobclothes`
--

DROP TABLE IF EXISTS `spongebobclothes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `spongebobclothes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `model` varchar(45) NOT NULL,
  `prize` int NOT NULL,
  `img` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `spongebobclothes`
--

LOCK TABLES `spongebobclothes` WRITE;
/*!40000 ALTER TABLE `spongebobclothes` DISABLE KEYS */;
INSERT INTO `spongebobclothes` VALUES (66,'SpongeBob Timberland boots',160,'../../assets/images/spongebobtimberland.jpg'),(67,'SpongeBob cap',15,'../../assets/images/spongebobcap.jfif'),(68,'Patrick costume',21,'../../assets/images/patrick.jpg'),(69,'SpongeBob dog hoodie',20,'../../assets/images/spongebobdog.jpg'),(70,'SpongeBob Pack shirt and pants',24,'../../assets/images/spongebobshirtpants.jpg'),(71,'SpongeBob Kid Pijama',20,'../../assets/images/spongebobpijama.png'),(72,'SpongeBob and Patrick shirt',18,'../../assets/images/shirtpatrickspbob.png'),(73,'SpongeBob face shirt',10,'../../assets/images/spongebobfaceshirt.jfif');
/*!40000 ALTER TABLE `spongebobclothes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `spongebobepisodes`
--

DROP TABLE IF EXISTS `spongebobepisodes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `spongebobepisodes` (
  `idspongebobepisodes` int NOT NULL AUTO_INCREMENT,
  `episodename` varchar(45) NOT NULL,
  `episodepreview` varchar(45) NOT NULL,
  `episodevideo` varchar(45) NOT NULL,
  PRIMARY KEY (`idspongebobepisodes`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `spongebobepisodes`
--

LOCK TABLES `spongebobepisodes` WRITE;
/*!40000 ALTER TABLE `spongebobepisodes` DISABLE KEYS */;
INSERT INTO `spongebobepisodes` VALUES (1,'San Patrick','assets/images/patrickepisode.jpg','assets/video/'),(2,'King Plankton','assets/images/kingplankton.jpg','assets/video/'),(3,'Bob and Gary','assets/images/bobGary.webp','assets/video/'),(4,'The Plankton revenge','assets/images/planktonrevenge.jpg','assets/video/');
/*!40000 ALTER TABLE `spongebobepisodes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-19  3:15:53
