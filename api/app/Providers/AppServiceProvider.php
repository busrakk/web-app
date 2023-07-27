<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Interfaces\Service\CategoryContact;
use App\Services\CategoryService;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(CategoryContact::class , CategoryService::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
