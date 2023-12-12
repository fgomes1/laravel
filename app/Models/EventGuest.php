<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Event;
use App\Models\User;
use Inertia\Inertia;
class EventGuest extends Model
{
    use HasFactory;

    protected $fillable = [
        'event_id',
        'user_id',
        'nome_convidado',
        'telefone_contato',
        'email',
    ];

    // Relacionamento com o evento
    public function event()
    {
        return $this->belongsTo(Event::class);
    }

    // Relacionamento com o usuário (se houver)
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    
}
