import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate, generatePath } from "react-router-dom";
import { fetchAds } from "../api/ads";
import AdCard from "../components/AdCard";
import { NEW_AD_PATH, EDIT_AD_PATH } from "../routes/const";
import { deleteAd } from "../api/ads";
import { UserContext } from "../contexts/UserContext";
import { toast } from "react-toastify";
import { TextField, Button, Typography, Box, CircularProgress, Pagination, Slider } from "@mui/material";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';



const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const Container = styled.div`
  max-width: 1100px;
  margin: 3rem auto;
`;

const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const StyledAd = styled.div`
  margin-bottom: 1rem;
`;

const Home = () => {
  const { isLoggedIn } = useContext(UserContext);
  const [ads, setAds] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredAds = search
    ? ads.filter((ad) => ad.title.toLowerCase().includes(search.toLowerCase()))
    : ads;

  const getAds = () => {
    fetchAds()
      .then((response) => setAds(response))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getAds();
  }, []);

  // const handleDeleteNotEfficiant = async (id) => {
  //   try {
  //     await deleteAd(id);
  //     getAds();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleEdit = (id) => {
    const path = generatePath(EDIT_AD_PATH, { id });
    navigate(path);
  };

  const handleDelete = async (id) => {
    try {
      await deleteAd(id);
      setAds((prevAds) => prevAds.filter((ad) => ad.id !== id));
      toast.success("Ad deleted successfully");
    } catch (error) {
      console.error(error);
      toast.error("Ad was not deleted. Try again later");
    }
  };

  return (
    <Container>
      <TextField
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        label="Search"
        placeholder="Search"
        sx={{ width: 400, mb: 2 }}
      />
       <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
    {/* --------------------- */}

    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    
  {/* ------------------------ */}
    <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
    <Pagination count={10} />
      <ActionBar>
        <h2>Marketplace</h2>
        {isLoggedIn && (
          <Link to={NEW_AD_PATH}>
            <Button variant="contained">Add ad</Button>
          </Link>
        )}
      </ActionBar>
      {filteredAds.length ? (
        filteredAds.map((ad) => (
          <StyledAd key={ad.id}>
            <AdCard
              ad={ad}
              handleEdit={() => handleEdit(ad.id)}
              handleDelete={() => handleDelete(ad.id)}
            />
          </StyledAd>
        ))
      ) : (
        <Typography variant="overline">No ads found...</Typography>
      )}

<Button variant="outlined" startIcon={<DeleteIcon />}>
  Delete
</Button>
<Button variant="contained" endIcon={<SendIcon />}>
  Send
</Button>
    </Container>
  );
};

export default Home;
