<?php

namespace App\Http\Controllers;

use App\Models\Anime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class AnimeController extends Controller
{
    /**
     * Afficher tous les animes
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $animes = Anime::all();

        return response()->json(['data' => $animes], 200);
    }

    /**
     * Afficher un anime
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $anime = Anime::find($id);

        if (!$anime) {
            return response()->json(['error' => 'Anime non trouvé'], 404);
        }

        return response()->json(['data' => $anime], 200);
    }

    /**
     * Créer un anime
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'cover_image' => 'required|image',
            'image' => 'required|image',
            'status' => 'required|string|max:255',
            'episode_count' => 'required|integer',
            'aired_from' => 'required|date',
            'aired_to' => 'nullable|date',
            'studio' => 'required|string|max:255',
            'director' => 'required|string|max:255',
            'writer' => 'required|string|max:255',
            'genre' => 'required|string|max:255',
            'rating' => 'required|integer',
            'critic_score' => 'nullable|integer',
            'user_score' => 'nullable|integer',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 422);
        }

        $anime = Anime::create([
            'title' => $request->title,
            'description' => $request->description,
            'cover_image' => $request->cover_image,
            'image' => $request->image,
            'status' => $request->status,
            'episode_count' => $request->nb_episodes,
            'aired_from' => $request->aired_from,
            'aired_to' => $request->aired_to,
            'studio' => $request->studio,
            'director' => $request->director,
            'writer' => $request->writer,
            'genre' => $request->genre,
            'rating' => $request->rating,
            'critic_score' => $request->critic_score,
            'user_score' => $request->user_score,
            'views_count' => 0,
            'likes_count' => 0,
            'dislikes_count' => 0,
        ]);

        return response()->json(['data' => $anime], 201);
    }

        /**
     * Mettre à jour un anime
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $anime = Anime::find($id);

        if (!$anime) {
            return response()->json(['error' => 'Anime non trouvé'], 404);
        }

        $validator = Validator::make($request->all(), [
            'title' => 'string|max:255',
            'description' => 'string',
            'cover_image' => 'string',
            'image' => 'string',
            'status' => 'string|in:ongoing,completed',
            'episode_count' => 'integer',
            'aired_from' => 'date',
            'aired_to' => 'date',
            'studio' => 'string',
            'director' => 'string',
            'writer' => 'string',
            'genre' => 'string',
            'rating' => 'numeric|min:0|max:10',
            'critic_score' => 'numeric|min:0|max:100',
            'user_score' => 'numeric|min:0|max:10',
            'views_count' => 'integer|min:0',
            'likes_count' => 'integer|min:0',
            'dislikes_count' => 'integer|min:0',
        ]);

        if ($validator->fails()) {
            throw new ValidationException($validator);
        }

        $anime->fill($request->all());
        $anime->save();

        return response()->json(['data' => $anime], 200);
    }

    /**
     * Supprimer un anime
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $anime = Anime::find($id);
        if (!$anime) {
            return response()->json(['error' => 'Anime non trouvé'], 404);
        }

        $anime->delete();

        return response()->json(['message' => 'Anime supprimé avec succès'], 200);
    }
}
