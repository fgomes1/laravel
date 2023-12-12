<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Event;
use Inertia\Inertia;

class EventController extends Controller
{
   
    public function index()
    {
        $events = Event::all();
        return Inertia::render('Events/Events', ['events' => $events]);
    }
    public function show($id)
    {
        $event = Event::findOrFail($id);
        return view('events.show', compact('event'));
    }

    public function create()
    {
        return Inertia::render('Create/Create', );
    }
   /*public function create()
    {
        $events = Event::all(); 
        return Inertia::render('Events/Create', ['events' => $events]);
    }*/
   /*     {
            return Inertia::render('Events/Edit', [
                'event' => $event,
            ]);
        }
*/
public function store(Request $request)
{
    $request->validate([
        'title' => 'required',
        'description' => 'required',
        'start_date' => 'required',
        'end_date' => 'required',
        'location' => 'required',
        'capacity' => 'required|integer',
    ]);

    $event = Event::create($request->all());

    return Inertia::render('Create/Create', [
        'event' => $event,
    ]);
}
    public function edit($id)
    {
        $event = Event::findOrFail($id);
        return view('events.edit', compact('event'));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'start_date' => 'required',
            'end_date' => 'required',
            'location' => 'required',
            'capacity' => 'required|integer',
        ]);

        $event = Event::findOrFail($id);
        $event->update($request->all());

        return redirect('/events')->with('success', 'Event updated successfully!');
    }

    public function destroy($id)
{
    // Certifique-se de enviar o evento para a página
    $event = Event::findOrFail($id);

    return inertia('Events/ConfirmDelete', ['event' => $event]);
}
}
