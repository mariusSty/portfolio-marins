import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"

export function About() {
  return (
    <section id="a-propos" className="bg-muted/40 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">À propos de moi</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Découvrez mon parcours, mes compétences et ma passion pour le développement web.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Formation</CardTitle>
              <CardDescription>Mon parcours académique</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <div className="font-medium">Diplôme en Développement Web</div>
                  <div className="text-sm text-muted-foreground">École / Université, 2020-2023</div>
                </li>
                <li>
                  <div className="font-medium">Formation Complémentaire</div>
                  <div className="text-sm text-muted-foreground">Organisme, 2019</div>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Expérience</CardTitle>
              <CardDescription>Mon parcours professionnel</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <div className="font-medium">Développeur Full Stack</div>
                  <div className="text-sm text-muted-foreground">Entreprise, 2023-Présent</div>
                </li>
                <li>
                  <div className="font-medium">Développeur Front-end</div>
                  <div className="text-sm text-muted-foreground">Entreprise, 2021-2023</div>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="md:col-span-2 lg:col-span-1">
            <CardHeader>
              <CardTitle>Qui suis-je ?</CardTitle>
              <CardDescription>Ma personnalité et mes intérêts</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Passionné par le développement web et les nouvelles technologies, je m&apos;efforce de créer des
                expériences utilisateur exceptionnelles. En dehors du code, j&apos;aime [vos intérêts personnels].
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

