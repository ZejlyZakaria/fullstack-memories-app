<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Anime extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'cover_image',
        'image',
        'status',
        'episode_count',
        'aired_from',
        'aired_to',
        'studio',
        'director',
        'writer',
        'genre',
        'rating',
        'critic_score',
        'user_score',
        'views_count',
        'likes_count',
        'dislikes_count',
    ];

    protected $casts = [
        'aired_from' => 'datetime',
        'aired_to' => 'datetime',
    ];
}
