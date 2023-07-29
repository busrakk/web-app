<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Interfaces\Service\CategoryContact;
use App\Interfaces\Service\ProductContact;
use App\Services\CategoryService;
use App\Services\ProductService;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(CategoryContact::class , CategoryService::class);
        $this->app->bind(ProductContact::class , ProductService::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
