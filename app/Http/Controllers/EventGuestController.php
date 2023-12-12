<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\EventGuest;
use App\Models\Event;
use App\Models\User;
use Inertia\Inertia;

class EventGuestController extends Controller
{
    /*public function index()
    {
        $eventGuests = EventGuest::all();
        return view('event_guests.index', compact('eventGuests'));
    }*/
    /*public function index()
    {
        $events = EventGuest::all();
        return Inertia::render('EventsGuest/EventsGuest', ['events' => $events]);
    }*/
    public function index()
{
    $eventGuests = EventGuest::all();
    return Inertia::render('EventsGuest/EventsGuest', ['eventGuests' => $eventGuests]);
}
   /* public function index()
    {
        // Use o modelo EventGuest diretamente para realizar a consulta com o método 'with'
        $eventGuests = EventGuest::with('event', 'user')->get();

        return Inertia::render('EventsGuest/EventsGuest', ['eventGuests' => $eventGuests]);
    }*/

    public function show($id)
    {
        $eventGuest = EventGuest::findOrFail($id);
        return view('event_guests.show', compact('eventGuest'));
    }

    /*public function create()
    {
        return view('event_guests.create');
    }*/
    public function create()
    {
        return Inertia::render('CreateGuest/CreateGuest', );
    }
    public function store(Request $request)
    {
        $request->validate([
            'event_id' => 'required',
            'user_id' => 'required',
            'nome_convidado' => 'required',
            'telefone_contato' => 'required',
            'email' => 'required|email',
        ]);

        EventGuest::create($request->all());

        return redirect('/event-guests')->with('success', 'Event guest created successfully!');
    }

    public function edit($id)
    {
        $eventGuest = EventGuest::findOrFail($id);
        return view('event_guests.edit', compact('eventGuest'));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'event_id' => 'required',
            'user_id' => 'required',
            'nome_convidado' => 'required',
            'telefone_contato' => 'required',
            'email' => 'required|email',
        ]);

        $eventGuest = EventGuest::findOrFail($id);
        $eventGuest->update($request->all());

        return redirect('/event-guests')->with('success', 'Event guest updated successfully!');
    }

    public function destroy($id)
    {
        $eventGuest = EventGuest::findOrFail($id);
        $eventGuest->delete();

        return redirect('/event-guests')->with('success', 'Event guest deleted successfully!');
    }
}
