<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAnimesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('animes', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description');
            $table->string('cover_image');
            $table->enum('status', ['completed', 'watching', 'plan_to_watch', 'on_hold', 'dropped']);
            $table->integer('episode_count')->nullable();
            $table->date('aired_from')->nullable();
            $table->date('aired_to')->nullable();
            $table->string('studio')->nullable();
            $table->string('director')->nullable();
            $table->string('writer')->nullable();
            $table->string('music')->nullable();
            $table->string('genre')->nullable();
            $table->float('rating')->nullable();
            $table->integer('critic_score')->nullable();
            $table->integer('user_score')->nullable();
            $table->integer('views_count')->nullable();
            $table->integer('likes_count')->nullable();
            $table->integer('dislikes_count')->nullable();
            $table->timestamps();
        });
    }


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('animes');
    }
}
