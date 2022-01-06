import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { fetchGamesList } from '../../actions/actions';
import { useDispatch } from 'react-redux';
import { Routes } from "../../common/routes";
import "bootstrap/dist/css/bootstrap.min.css";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import "./Game.scss";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Breakpoint } from 'react-socks';
import Game from '../../components/Games/Game';
import { Card } from "react-bootstrap";
import CardList from '../../components/Card/Card';
import './style.css'
import { FaArrowUp } from "react-icons/fa";


function CircularIndeterminate() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress />
        </Box>
    );
}

export default () => {
    const { games: games } = useSelector((state) => state);
    const { isLoading } = useSelector((state) => state);
    const { gisErrorames: isError } = useSelector((state) => state);
    const dispatch = useDispatch();
    const [searchInputName, setSearchInputName] = useState('');
    const [searchInputScore, setSearchInputScore] = useState('');
    const [searchInputOrder, setsearchInputOrder] = useState('0');
    const [searchParam] = useState(["rating", "name"]);


    useEffect(() => {
        dispatch(fetchGamesList()).then(

        );

    }, []);

    function Reset() {
        setsearchInputOrder(0);
        setSearchInputScore('');
        setSearchInputName('')
    }

    function search(searchName, searchScore) {
        let filteredData = [];
        filteredData = games.filter((item) => {
            return searchParam.some((newItem) => {
                if (searchInputName !== '' && searchInputScore !== '') {
                    return (
                        item['name']
                            .toString()
                            .toLowerCase()
                            .indexOf(searchInputName.toLowerCase()) > -1 && parseInt(item['rating']) == searchInputScore
                    );
                }
                else if (searchInputName !== '' && searchInputScore == '') {
                    return (
                        item['name']
                            .toString()
                            .toLowerCase()
                            .indexOf(searchInputName.toLowerCase()) > -1
                    );
                }
                else if (searchInputName == '' && searchInputScore !== '') {
                    return (
                        parseInt(item['rating']) == searchInputScore
                    );
                }
                else {
                    return games;
                }
            });
        });
        if (searchInputOrder !== "0") {
            if (searchInputOrder == 1) {
                filteredData.sort((a, b) => {
                    if (a.first_release_date < b.first_release_date) return -1
                    return a.first_release_date > b.first_release_date ? 1 : 0
                })
            }
            else if (searchInputOrder == 2) {

                filteredData.sort((a, b) => {
                    if (a.rating < b.rating) return -1
                    return a.rating > b.rating ? 1 : 0
                })
            }
            else {
                filteredData.sort((a, b) => {
                    if (a.name < b.name) return -1
                    return a.rating > b.rating ? 1 : 0
                })

            }

        }
        return filteredData
    }


    const card = (
        <React.Fragment  >
            <CardContent >
                <Typography color="white"  >
                    <h4 className='custom'>Filter Result</h4>
                </Typography>
                <Typography color="white" className='custom'>
                    <div class="form-group">
                        <label for="InputName1" style={{ color: "white" }}>Name(contains)</label>
                        <input className='input-style' id="InputName1" placeholder="Text String" onChange={(e) => setSearchInputName(e.target.value)} />
                    </div>
                </Typography>
                <Typography className='custom'>
                    <div class="form-group custom">
                        <label for="InputScore1" style={{ color: "white" }} class="form-label">Minimum Score</label>
                        <input className="input-style" id="InputScore1" value={searchInputScore} placeholder="10-100" type="number" onChange={(e) => setSearchInputScore(e.target.value)} />
                    </div>
                </Typography>
                <Typography className='custom'>
                    <div class="form-group ">
                        <label class="form-label" style={{ color: "white" }} for="inlineFormCustomSelectPref2">Order By</label>
                        <div style={{display:"flex"}}>
                            <FaArrowUp className='icon-order' />
                            <select class="input-select" id="inlineFormCustomSelectPref2" value={searchInputOrder} onChange={(e) => setsearchInputOrder(e.target.value)} >
                                <option value="0" selected disabled >Select an Option</option>
                                <option style={{ color: "#c1d1e8" }} value="1"  >Release Date</option>
                                <option style={{ color: "#c1d1e8" }} value="2">Score</option>
                                <option style={{ color: "#c1d1e8" }} value="3">Name</option>
                            </select>
                        </div>

                    </div>
                </Typography>
            </CardContent>
            <CardActions style={{ backgroundColor: "#0e1a2b" }} disableSpacing >
                <Button style={{ backgroundColor: "#5692e8", color: "white", width: "90px", marginLeft: "auto", marginRight: "2%", marginTop: "10%", marginBottom: "3%" }} className='clear-button' onClick={Reset}>Clear</Button>
            </CardActions>
        </React.Fragment>
    );
    const card_tablet = (
        <React.Fragment  >
            <CardContent >
                <Typography color="white" style={{ marginBottom: "3%" }} >
                    <h4 className='custom'>Filter Result</h4>
                </Typography>
                <Typography className='custom custom-search' >
                    <div class="input-text" style={{ marginBottom: "3%" }}>
                        <label for="InputName2" style={{ color: "white" }}>Name(contains)</label>
                        <input className='input-style' id="InputName2" value={searchInputName} placeholder="Text String" onChange={(e) => setSearchInputName(e.target.value)} />
                    </div>
                    <div class="input-score">
                        <label for="InputScore2" style={{ color: "white" }} class="form-label">Minimum Score</label>
                        <input className="input-style" id="InputScore2" value={searchInputScore} placeholder="10-100" type="number" onChange={(e) => setSearchInputScore(e.target.value)} />
                    </div>
                    <div class="input-release-date">
                        <label className="form-label" style={{ color: "white" }} for="inlineFormCustomSelectPref2">Order By</label>
                        <div style={{display:"flex"}}>
                            <FaArrowUp className='icon-order' />
                        <select class="input-style input-select" id="inlineFormCustomSelectPref2" value={searchInputOrder} onChange={(e) => setsearchInputOrder(e.target.value)} >
                            <option value="0" selected disabled >Select an Option</option>
                            <option style={{ color: "#c1d1e8" }} value="1"  >Release Date</option>
                            <option style={{ color: "#c1d1e8" }} value="2">Score</option>
                            <option style={{ color: "#c1d1e8" }} value="3">Name</option>
                        </select>
                        </div>
                    </div>
                    <div class="clear-button">
                        <Button style={{ backgroundColor: "#5692e8", color: "white", width: "90px", marginLeft: "auto", marginRight: "auto", marginTop: "-5%", marginBottom: "auto%", padding: "9px" }} className='clear-button' onClick={Reset}>Clear</Button>
                    </div>
                </Typography>
            </CardContent>
        </React.Fragment>
    );
    const card_mobile = (
        <React.Fragment  >
            <CardContent >
                <Typography color="white" style={{ marginBottom: "3%" }} >
                    <h4 className='custom'>Filter Result</h4>
                </Typography>
                <Typography className=' custom-search' >
                    <div class="container-mobile">
                        <div class="input-text" style={{ marginBottom: "3%" }}>
                            <label for="InputName3" style={{ color: "white" }}>Name(contains)</label>
                            <input type="email" className='input-style' id="InputName3" value={searchInputName} aria-describedby="emailHelp" placeholder="Text String" onChange={(e) => setSearchInputName(e.target.value)} />
                        </div>
                        <div class="input-score">
                            <label for="InputScore3" style={{ color: "white" }} class="form-label">Minimum Score</label>
                            <input className="input-style" id="InputScore3" value={searchInputScore} placeholder="10-100" type="number" onChange={(e) => setSearchInputScore(e.target.value)} />
                        </div>
                        <div class="input-release-date">
                            <label className="form-label" style={{ color: "white" }} for="inlineFormCustomSelectPref3">Order By</label>
                            <div style={{display:"flex"}}>
                            <FaArrowUp className='icon-order' />
                            <select class="input-style input-select" id="inlineFormCustomSelectPref3" value={searchInputOrder} onChange={(e) => setsearchInputOrder(e.target.value)} >
                                <option value="0" selected disabled >Select an Option</option>
                                <option style={{ color: "#c1d1e8" }} value="1"  >Release Date</option>
                                <option style={{ color: "#c1d1e8" }} value="2">Score</option>
                                <option style={{ color: "#c1d1e8" }} value="3">Name</option>
                            </select>
                            </div>
                        </div>
                        <div class="clear-button">

                            <Button style={{ backgroundColor: "#5692e8", color: "white", width: "100%", marginLeft: "auto", marginRight: "auto", marginTop: "5%", marginBottom: "auto%", padding: "9px" }} className='clear-button' onClick={Reset}>Clear</Button>
                        </div>
                    </div>


                </Typography>
            </CardContent>
        </React.Fragment>
    );
    return (
        <>
            <Breakpoint large up>
                <div className="container1">
                    <div className=" row">
                        <div className='col-2'></div>
                        <div className='col-9'>
                            <Box sx={{ minWidth: 100 }} >
                                <Card variant="outlined" style={{ backgroundColor: "#0e1a2b" }}>{card}</Card>
                            </Box>
                        </div>
                    </div>
                    <div className="game-post">
                        {

                            isLoading ? <CircularIndeterminate /> : search().map(game => {
                                return (
                                    <CardList
                                        key={game.id}
                                        movieId={game.id}
                                    >
                                        <Game
                                            name={game.name}
                                            first_release_date={game.first_release_date}
                                            summary={game.summary}
                                            rating={game.rating}
                                        />
                                    </CardList>
                                );
                            })
                        }
                    </div>
                    <div class="right"></div>
                </div>
            </Breakpoint>

            <Breakpoint medium only>
                <div className="game-vedio" style={{ margin: "2.5%" }}>
                    <div className='search-panel'>
                        <Box sx={{ minWidth: 100 }} style={{ backgroundColor: "#0e1a2b" }}>
                            <Card variant="outlined" style={{ backgroundColor: "#0e1a2b" }}>{card_tablet}</Card>
                        </Box>
                    </div>
                    <div className="game-list">
                        {

                            isLoading ? <CircularIndeterminate /> : search().map(game => {
                                return (
                                    <CardList
                                        key={game.id}
                                        movieId={game.id}
                                    >
                                        <Game
                                            name={game.name}
                                            first_release_date={game.first_release_date}
                                            summary={game.summary}
                                            rating={game.rating}
                                        />
                                    </CardList>
                                );
                            })
                        }
                    </div>
                    <div class="right"></div>
                </div>
            </Breakpoint>


            <Breakpoint small down>
                <div className="game-vedio" style={{ margin: "5%" }}>
                    <div className='search-panel'>
                        <Box sx={{ minWidth: 100 }} style={{ backgroundColor: "#0e1a2b" }}>
                            <Card variant="outlined" style={{ backgroundColor: "#0e1a2b" }}>{card_mobile}</Card>
                        </Box>
                    </div>
                    <div className="movie-list-mobile">
                        {

                            isLoading ? <CircularIndeterminate /> : search().map(game => {
                                return (
                                    <CardList
                                        key={game.id}
                                        gameId={game.id}
                                    >
                                        <Game
                                            name={game.name}
                                            first_release_date={game.first_release_date}
                                            summary={game.summary}
                                            rating={game.rating}
                                        />
                                    </CardList>
                                );
                            })
                        }
                    </div>
                </div>
            </Breakpoint>


        </>
    );
}


