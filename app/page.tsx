// import { PokemonForm } from "@/components/PokemonForm";
import { UserDirectory } from "@/components/UserDirectory";

export default function Home() {
  return (
    <div>
      <section className="my-20">
        <div className="px-6">
          {/* <PokemonForm /> */}
          <UserDirectory />
        </div>
      </section>
    </div>
  );
}
