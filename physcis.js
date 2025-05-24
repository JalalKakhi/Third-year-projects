class shout {
    shout(V0, tita) {
        this.V0 = V0;
        this.tita = tita

    }
    name(params) {

    }
    DegreeToRadian(tita) {
        return tita * (Math.PI / 180)

    }
    Vx(tita, V0) {
        titaInRadain = this.DegreeToRadian(tita)
        return V0 * Math.cos(titaInRadain)
    }
    Vy(tita, V0, t) {
        titaInRadain = this.DegreeToRadian(tita)
        return -9.98 * t + V0 * Math.sin(titaInRadain)

    }
    X(Vx, t) {
        return Vx * t
    }

    Y(Vy, t) {
        return (1 / 2) * 9.98 * t * t + Vy * t
    }

    t(x, V0, tita) {
        return x / (Vx(V0, tita))
    }

    colculateTheShout(tita, V0, t) {
        vx = Vx(tita, V0)
        vy = Vy(tita, V0)
        if (tita < 180 || tita > 0 && tita != 90) {
            return ShoutVariables = [vx, vy, X(vx, t), Y(vy, t)]
        }
        if (tita == 90) {
            return ShoutVariables = [vx, Vy(tita, V0), X = 0, Y(vy, t)]
        }
        if (tita == 180 || tita == 0) {
            return ShoutVariables = [vx, vy, X(vx, t), Y(vy, t)]
        }
    }

}