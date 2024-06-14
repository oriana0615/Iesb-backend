// src/controllers/PokemonController.js
const axios = require('axios');

async function getPokemonByName(req, res) {
    try {
        const { name } = req.params;
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao buscar Pokémon', error: error.message });
    }
}

async function getPokemonById(req, res) {
    try {
        const { id } = req.params;
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao buscar Pokémon', error: error.message });
    }
}

async function getPokemonList(req, res) {
    try {
        const { limit = 20, offset = 0 } = req.query;
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon', {
            params: { limit, offset }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao buscar lista de Pokémon', error: error.message });
    }
}

async function getPokemonTypes(req, res) {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/type');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao buscar tipos de Pokémon', error: error.message });
    }
}

async function getPokemonAbilities(req, res) {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/ability');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao buscar habilidades de Pokémon', error: error.message });
    }
}

async function getPokemonEvolutions(req, res) {
    try {
        const { id } = req.params;
        const response = await axios.get(`https://pokeapi.co/api/v2/evolution-chain/${id}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao buscar cadeia de evolução de Pokémon', error: error.message });
    }
}

async function getPokemonLocations(req, res) {
    try {
        const { id } = req.params;
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/encounters`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao buscar locais de encontro de Pokémon', error: error.message });
    }
}

module.exports = {
    getPokemonByName,
    getPokemonById,
    getPokemonList,
    getPokemonTypes,
    getPokemonAbilities,
    getPokemonEvolutions,
    getPokemonLocations
};
