<?php
use App\Http\Controllers\EventController;
use App\Http\Controllers\EventGuestController;
use App\Http\Controllers\ExampleController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/example', [ExampleController::class, 'index'])->name('example');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    //eventos
    Route::get('/events', [EventController::class, 'index'])->name('events');
    Route::get('/events/{id}', [EventController::class, 'show']);
    Route::get('/create', [EventController::class, 'create'])->name('events.create');;
    Route::post('/events', [EventController::class, 'store'])->name('events.store');
    Route::get('/events/{id}/edit', [EventController::class, 'edit']);
    Route::put('/events/{id}', [EventController::class, 'update']);
    Route::delete('/events/{id}', [EventController::class, 'destroy']);

    //eventGuest
    Route::get('/event-guests', [EventGuestController::class, 'index'])->name('event-guests');
    Route::get('/event-guests/{id}', [EventGuestController::class, 'show']);
    Route::get('/create-guests', [EventGuestController::class, 'create'])->name('create-guests');
    Route::post('/event-guests', [EventGuestController::class, 'store'])->name('event-guests');
    Route::get('/event-guests/{id}/edit', [EventGuestController::class, 'edit']);
    Route::put('/event-guests/{id}', [EventGuestController::class, 'update']);
    Route::delete('/event-guests/{id}', [EventGuestController::class, 'destroy']);
});

require __DIR__.'/auth.php';
