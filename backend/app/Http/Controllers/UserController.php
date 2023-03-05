<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class UserController extends Controller
{
    /**
     * Afficher tous les utilisateurs
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all();

        return response()->json(['data' => $users], 200);
    }

    /**
     * Afficher un utilisateur
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['error' => 'Utilisateur non trouvé'], 404);
        }

        return response()->json(['data' => $user], 200);
    }

    /**
     * Créer un utilisateur
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 422);
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'address' => $request->address,
            'password' => bcrypt($request->password),
        ]);

        return response()->json(['data' => $user], 201);
    }

    /**
     * Mettre à jour un utilisateur
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['error' => 'Utilisateur non trouvé'], 404);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $user->id,
            'address' => 'required|string|max:255',
            'password' => 'sometimes|required|string|min:8',
        ]);

        if ($validator->fails()) {
            throw new ValidationException($validator);
        }

        $user->name = $request->name;
        $user->email = $request->email;
        $user->address = $request->address;

        if ($request->password) {
            $user->password = bcrypt($request->password);
        }

        $user->save();

        return response()->json(['data' => $user], 200);
    }

    /**
     * Supprimer un utilisateur
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::find($id);
        if (!$user) {
            return response()->json(['error' => 'Utilisateur non trouvé'], 404);
        }

        $user->delete();

        return response()->json(['message' => 'Utilisateur supprimé avec succès'], 200);
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:8',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 422);
        }

        if (!auth()->attempt(['email' => $request->email, 'password' => $request->password])) {
            return response()->json(['error' => 'Email ou mot de passe incorrect'], 401);
        }

        $user = auth()->user();
        $token = $user->createToken('auth_token')->accessToken;

        return response()->json(['user' => $user, 'access_token' => $token]);
    }

}

