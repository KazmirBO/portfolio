<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class MainController extends AbstractController
{
  #[Route('/', name: 'app_start')]
  public function index(): Response
  {
    return $this->redirectToRoute('app_home');
  }

  #[Route('/{_locale}', name: 'app_home')]
  public function home(string $_locale): Response
  {
    return $this->render(
      'main/home.html.twig',
      ["locale" => $_locale],
    );
  }

  #[Route('/{_locale}/contact', name: 'app_contact')]
  public function contact(string $_locale): Response
  {
    return $this->render(
      'main/contact.html.twig',
      ["locale" => $_locale],
    );
  }

  #[Route('/{_locale}/about', name: 'app_about')]
  public function about(string $_locale): Response
  {
    return $this->render(
      'main/about.html.twig',
      ["locale" => $_locale],
    );
  }
}
